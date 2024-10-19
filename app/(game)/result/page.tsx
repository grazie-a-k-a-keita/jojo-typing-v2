import Client from '@/app/(game)/result/components/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '結果画面',
};

export default function Page() {
  return (
    <>
      <Client />
    </>
  );
}
