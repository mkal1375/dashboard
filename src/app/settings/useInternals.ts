import { db } from '@/db/db';
import { useState } from 'react';

export default function useDeleteDB() {
  const [deleting, setDeleting] = useState(false);
  const deleteDB = async () => {
    try {
      setDeleting(true);
      await db.users.clear();
      await db.meta.clear();
      setDeleting(false);
    } catch (e) {
      console.error(e);
      setDeleting(false);
    }
  };

  return {
    deleteDB,
    deleting,
  };
}
