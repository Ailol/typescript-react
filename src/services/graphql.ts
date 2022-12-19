import { gql } from "apollo-boost";

export const ARRIVAL = `
{
  stopPlace(id: "NSR:StopPlace:4000") {
    id
    name
    estimatedCalls(timeRange: 72100, numberOfDepartures: 100, arrivalDeparture: arrivals) {     
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

export const q = gql`
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
