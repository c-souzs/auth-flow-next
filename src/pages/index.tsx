/* eslint-disable @next/next/no-img-element */
import type { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import Layout from '../components/Layout';
import { authOptions } from './api/auth/[...nextauth]';

type HomeProps = {
  user: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  }
}

const Home = ({ user }: HomeProps) => {
  const { name, email, image } = user;

  const hasImage = image!.includes('.jpg') || image!.includes('.jpge') || image!.includes('.png');
  console.log(image);
  
  return (
    <Layout>
      <div className='flex flex-col items-center'>
        <img src={hasImage && image ? image : '/low-image-profile.png'} alt={`Image user ${name}`} className='w-[150px] h-[150px] rounded-full border-2 border-zinc-900'/>
        <strong className='text-xl text-white mt-1'>{name}</strong>
      </div>
      <div className='flex justify-between items-center mt-3'>
        <p className='text-lg text-white'>Email: { email }</p>
        <button onClick={() => signOut()} className='flex items-center gap-2 font-medium p-2 rounded transition-colors hover:bg-[#2C2C30]'>
          <Image src='/sign-out.svg' alt='Sign out' height={24} width={24}/>
          Sair
        </button>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req, context.res, authOptions
  );
      
  if( !session ) return { redirect: { destination: '/login', permanent: true }}

  return {
    props: {
      user: session.user
    }
  }
}

export default Home
