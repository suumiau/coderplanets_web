import gql from 'graphql-tag'

const githubSigninRes = 'githubSignin'
const githubSignin = gql`
  mutation($code: String!) {
    githubSignin(code: $code) {
      token
      user {
        nickname
        bio
      }
    }
  }
`

const user = gql`
  query user($id: ID!) {
    user(id: $id) {
      nickname
      avatar
      bio
      fromGithub
    }
  }
`

const schema = {
  user,
  githubSignin,
  githubSigninRes,
}

export default schema
