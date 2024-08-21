A fork of react-scheduler, original by Bitnoise can be found here: `https://scheduler.bitnoise.pl/`

npm link `https://www.npmjs.com/package/@papgooner/papgooner-react-scheduler`

# Installation

    npm i @papgooner/papgooner-react-scheduler

Incase of error about useMemo, put below into package.json:

    "react": "18.2.0",
    "react-dom": "18.2.0",


Adds a attendee object array property to event objects, and a total attendee count to each event tile.

Provides keys to children events to prevent errors.

Example data: 

```const schedulerData: SchedulerData = [
    {
      id: "63faaa80-6074-490c-833d-e08ebece4cb4",
      label: {
        icon: "https://papgooner-public-images.s3.eu-west-2.amazonaws.com/300px-Bald_Guy_Staring.jpg",
        title: "Parties",
        subtitle: "Upcoming parties",
      },
      data: [
        {
          id: "5794086c-cbd5-448d-85b4-d6b81b25211c",
          startDate: new Date("2024-09-08T04:40:27.877Z"),
          endDate: new Date("2024-09-11T04:40:27.877Z"),
          occupancy: 0,
          title: "House party",
          subtitle: "My house",
          description: "A party at my house",
          bgColor: "#D36BEA",
          attendees: [
            {
              service_id: "cf42de91-172e-4848-aa2e-dd84930a144c",
              name: "Shelly Mendoza",
              email: "shelly.mendoza@mail.com",
              confirmed: true,
              arrived: false,
              attended: false,
            },
          ],
        },
      ],
    },
  ];```

