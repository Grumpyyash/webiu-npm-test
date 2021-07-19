import React from 'react';
import './App.css';
import { ButtonComponent } from 'webiu-npm'
import {ContactComponent} from 'webiu-npm'
import {AboutComponent} from "webiu-npm"
import {AnnouncementComponent} from "webiu-npm"
import {CardComponent} from "webiu-npm"

function App() {
  return (
    <div>
      <ButtonComponent heading="Button Component" buttonText="Button" buttonWidth="400px" />

      <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to Newsletter" contactMessage="Contact us" subscribeMessage="Subscribe to our news" />

      <AboutComponent header="About Component" mainText="Welcome to SCoRe Lab" subText="This is a description text" buttonText="Explore" buttonLink="/" image="https://scorelab.org/images/community.png" />

      <AnnouncementComponent header="Announcements" speed="2" title="Announcements" direction="up" data={[{text: "Notice 1", link: "/"}, {text: "Notice 2", link: "/"}]} />

      <CardComponent header="Services Component" card={false} services={true} buttonText="All Services" buttonLink="/"
                     data={[{image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/software-engineer.svg", title: "DEVELOPMENT", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                            {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/website-structure.svg", title: "WEBSITE", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                            {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/data-scientist.svg", title: "ANALYTICS", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"}]} />

      <CardComponent header="Card Component" card={true} services={false}
                     data={[{image: "https://scorelab.org/logos/projects/dronesym.png", title: "Dronesym", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"},
                            {image: "https://scorelab.org/logos/projects/parks.png", title: "Parks", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"},
                            {image: "https://scorelab.org/logos/projects/bassa.png", title: "Bassa", description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", buttonText: "All Services", buttonLink: "/"}]} /> 
    </div>
  );
}

export default App;
