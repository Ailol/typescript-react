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
