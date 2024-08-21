A fork of react-scheduler, original by Bitnoise can be found here: [https://scheduler.bitnoise.pl/](https://scheduler.bitnoise.pl/)

npm link [https://www.npmjs.com/package/@papgooner/papgooner-react-scheduler](https://www.npmjs.com/package/@papgooner/papgooner-react-scheduler)

# Installation

    npm i @papgooner/papgooner-react-scheduler

Incase of error about useMemo, put below into package.json:

    "react": "18.2.0",
    "react-dom": "18.2.0"


Adds an attendee object array property to event objects, and a total attendee count to each event tile.

Adds option to replace default toolbar buttons with custom buttons (while preserving navigation and zoom functionality).

Adds option to render additional elements on end of toolbar.

Provides keys to various children events to prevent errors.

Example: 

```
import { Scheduler, SchedulerData } from "@papgooner/papgooner-react-scheduler";

const eventData: SchedulerData = [
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
];

const additionalToolBarBits: React.ReactNode[] = [
  [
    <div key="group1">
      <button>Button one</button>
      <button>Button two</button>
    </div>,
    <div key="group2">
      <button>Button three</button>
      <button>Button four</button>
    </div>,
  ],
];

const buttonsToReplaceDefaults = {
  navBtnWrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ display: "flex" }}>{children}</div>
  ),
  navBtn: ({
    children,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const additionalOnClick = () => {
      console.log("yeah");
    };
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      additionalOnClick();
      if (onClick) {
        onClick(e);
      }
    };
    return (
      <button
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "0.875rem",
        }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  },
  todayBtn: ({
    children,
    onClick,
    ...props
  }: {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const additionalOnClick = () => {
      console.log("yeah");
    };
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      additionalOnClick();
      if (onClick) {
        onClick(e);
      }
    };
    return (
      <button
        style={{
          position: "relative",
          fontWeight: "600",
          cursor: "pointer",
        }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    );
  },
  zoomBtnWrapper: ({ children }: { children: React.ReactNode }) => (
    <div style={{ position: "relative" }}>{children}</div>
  ),
  zoomInBtn: ({
    onClick,
    ...props
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    const additionalOnClick = () => {
      console.log("yeah");
    };
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      additionalOnClick();
      if (onClick) {
        onClick(e);
      }
    };
    return (
      <button onClick={handleClick} {...props}>
        zoom in
      </button>
    );
  },
  zoomOutBtn: ({
    onClick,
    ...props
  }: {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
  }) => {
    const additionalOnClick = () => {
      console.log("yeah");
    };
    const handleClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
      additionalOnClick();
      if (onClick) {
        onClick(e);
      }
    };
    return (
      <button onClick={handleClick} {...props}>
        zoom out
      </button>
    );
  },
};

const App = () => {
  return (
    <>
      <Scheduler
        data={eventData}
        isLoading={true}
        renderDefaultButtons={{ navigationButtons: false, zoomButtons: false }}
        buttonsToReplaceDefaults={buttonsToReplaceDefaults}
        additionalToolbarItems={[additionalToolBarBits]}
        onRangeChange={(_newRange) => {}}
        onTileClick={(clickedEventTile) => {}}
        onItemClick={(unitOrStaff) => {}}
        onFilterData={() => {}}
        onClearFilterData={() => {}}
        config={{
          zoom: 1,
          filterButtonState: -1,
          maxRecordsPerPage: 20,
        }}
      />
    </>
  );
};

export default App;
```
