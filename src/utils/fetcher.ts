import { z, ZodType, ZodTypeDef } from 'zod';

interface FetcherOptions<T extends ZodType<unknown, ZodTypeDef, unknown>>
  extends RequestInit {
  schema?: T;
}

export async function fetcher<T extends ZodType<unknown, ZodTypeDef, unknown>>(
  url: string,
  options: FetcherOptions<T>
): Promise<z.infer<T>> {
  try {
    const { schema, ...fetchOptions } = options;

    const finalFetchOptions: RequestInit = {
      ...fetchOptions,
      headers: {
        ...fetchOptions.headers,
        ...(fetchOptions.body && { 'Content-Type': 'application/json' }),
      },
      body: fetchOptions.body ? JSON.stringify(fetchOptions.body) : undefined,
    };

    const response = await fetch(url, finalFetchOptions);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    if (!schema) {
      return data;
    }

    const validatedData = schema.parse(data);

    return validatedData;
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw new Error(
        `Validation failed: ${error.errors.map((e) => e.message).join(', ')}`
      );
    }
    if (error instanceof Error) {
      throw new Error(`Fetch failed: ${error.message}`);
    }
    throw new Error(`Fetch failed: Unknown Error \n ${error}`);
  }
}
