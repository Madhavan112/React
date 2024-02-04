import Tab from "./tab";

export default function CustomTab() {
    const TabContent = [
      {
        label: "Tab1",
        content: "Hello World",
      },
      {
          label: "Tab2",
          content: "I love Ipl!",
        },
        {
          label: "Tab3",
          content: "RandomContent",
        },
    ];
    return(
      <Tab TabContent={TabContent}/>
    )
  }
  