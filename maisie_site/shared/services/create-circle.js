import gql from 'graphql-tag'

export default (
  apolloClient,
  file,
) => {
  apolloClient
    .mutate({
      mutation: gql`
        mutation createCircle($file: Upload!) {
          createCircle(file: $file)
        }
      `,
      variables: { file }
    })
}
