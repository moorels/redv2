import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from '@redwoodjs/auth'


const HomepagePage = () => {

  const logmeout = useAuth()
  return (
    <>
      <MetaTags
        title="Homepage"
        // description="Homepage description"
        /* you should un-comment description and add a unique description, 155 characters or less
      You can look at this documentation for best practices : https://developers.google.com/search/docs/advanced/appearance/good-titles-snippets */
      />

      <h1>HomepagePage</h1>
      <p>
        Find me in <code>./web/src/pages/HomepagePage/HomepagePage.js</code>

      <p></p>

        <Link to={routes.homepage()}>Home</Link>

        <p></p>
        <Link to={routes.login()}>Login</Link>
        <p></p>
        <Link to={routes.login()}>Login</Link>
        <p>
        <button onClick={() => logmeout.logOut()}>Log Out</button>

        </p>










      </p>
    </>
  )
}

export default HomepagePage
