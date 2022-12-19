import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: "https://api.entur.io/journey-planner/v3/graphql",
    cache: new InMemoryCache(),
});

export const qq = gql`
    query GetStopPlace(
        $id: String!
        $timeRange: Int
        $numberOfDepartures: Int
        $arrivalDeparture: ArrivalDeparture
    ) {
        stopPlace(id: $id) {
            id
            name
            estimatedCalls(
                timeRange: $timeRange
                numberOfDepartures: $numberOfDepartures
                arrivalDeparture: $arrivalDeparture
            ) {
                aimedArrivalTime
                expectedArrivalTime
                destinationDisplay {
                    frontText
                }
                quay {
                    name
                    publicCode
                }
                serviceJourney {
                    journeyPattern {
                        line {
                            publicCode
                            name
                            transportMode
                        }
                    }
                }
            }
        }
    }
`;
export const ap = () => {
    client
        .query({
            qq,
            variables: {
                id: "NSR:StopPlace:4000",
                timeRange: 72100,
                numberOfDepartures: 100,
                arrivalDeparture: "arrivals",
            },
        })
        .then((result) => {
            // Add the resulting data to the cache
            client.cache.writeQuery({
                qq,
                variables: {
                    id: "NSR:StopPlace:4000",
                    timeRange: 72100,
                    numberOfDepartures: 100,
                    arrivalDeparture: "arrivals",
                },
                data: result.data,
            });
            // console.log(result.data);
        });
};
