import Client from '@/app/(game)/play/[mode]/components/client';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'プレイ画面',
};

export default function Page({ params }: { params: { mode: string } }) {
  return (
    <>
      <Client mode={params.mode} />
    </>
  );
}
