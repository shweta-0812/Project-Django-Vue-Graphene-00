import gql from 'graphql-tag'

export const ALL_LINKS_QUERY = gql`
    query AllLinksQuery($first: Int, $skip: Int, $orderBy: LinkOrderBy) {
        allLinks(first: $first, skip: $skip, orderBy: $orderBy) {
            id
            createdAt
            url
            description
            postedBy {
                id
                name
            }
            votes {
                id
                user {
                    id
                }
            }
        }
        _allLinksMeta {
            count
        }
    }
`