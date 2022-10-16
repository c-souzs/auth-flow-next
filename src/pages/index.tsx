import type { GetServerSideProps } from 'next'
import { unstable_getServerSession } from 'next-auth';
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
  
  return (
    <div>
      <p>Bem vindo { name } - { email }</p>
    </div>
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
