
import { getProviders, signIn, useSession} from "next-auth/react"
import { useRouter } from "next/router"
import styles from '../../styles/Signin.module.css'


export default function SignIn({ providers }) {
  const { data: session }= useSession()
  const { push }= useRouter()
  if(session) push('/')
  return (
    <div className={styles.container}>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className={styles.btn} onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps(context) {
  const providers = await getProviders()
  return {
    props: { providers},
  }
}