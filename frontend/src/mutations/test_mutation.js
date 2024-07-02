import gql from 'graphql-tag'

export const CREATE_LINK_MUTATION = gql`
    mutation CreateLinkMutation($description: String!, $url: String!) {
        createLink(
            description: $description,
            url: $url,
        ) {
            id
            createdAt
            url
            description
        }
    }
`