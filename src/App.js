import React from 'react';
import './App.css';
import {ButtonComponent} from 'webiu-npm'
import {ContactComponent} from 'webiu-npm'
import { AboutComponent } from 'webiu-npm'
import { AnnouncementComponent } from 'webiu-npm'
import { CardComponent } from 'webiu-npm'
import { ComingsoonComponent } from 'webiu-npm'
import { CarouselComponent } from 'webiu-npm'
import { DescriptionComponent } from 'webiu-npm'
import { FaqComponent } from 'webiu-npm'
import { FooterComponent } from 'webiu-npm'
import { HeaderComponent } from 'webiu-npm'
import { LetterAvatar } from 'webiu-npm'
import { ImageAvatar } from 'webiu-npm'
import { Partner } from 'webiu-npm'
import { SignupAndLogin } from 'webiu-npm'
import { Pricing } from 'webiu-npm'
import { PageNotFound } from 'webiu-npm'
import { Statistics } from 'webiu-npm'
import { Spinners } from "webiu-npm"
import { Stepper } from 'webiu-npm'
import { GoogleMap } from 'webiu-npm'
import { TrustedBy } from 'webiu-npm'
import { ImageGrid } from "webiu-npm"
import { SearchBar } from 'webiu-npm'
import { Testimonial } from 'webiu-npm'
import { Timestamp } from 'webiu-npm'
import { VideoPlayer } from 'webiu-npm'
import { LinksList } from 'webiu-npm'
import { ProgressBar } from 'webiu-npm'
import { NavBar } from 'webiu-npm'

function App() {
  return (
    <div>
      <ButtonComponent buttonText="Button" heading="Button Component" buttonWidth="350px" />

      <ContactComponent contactTitle="Contact us" subscribeTitle="Subscribe to News" contactMessage="Contact us" 
                        subscribeMessage="Subscribe to Newsletter" />

      <AboutComponent header="About Component" mainText="Welcome to SCoRe Lab" subText="This is a description text" 
                      buttonText="Explore" buttonLink="/" image="https://scorelab.org/images/community.png" />

      <AnnouncementComponent header="Announcements" speed="2" title="Announcements" direction="up" 
                            data={[{text: "Notice 1", link: "/"}, {text: "Notice 2", link: "/"}]} />

      <CardComponent header="Services Component" card={false} services={true} buttonText="All Services" buttonLink="/"
                    data={[{image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/software-engineer.svg", 
                            title: "DEVELOPMENT", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                            {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/website-structure.svg", 
                            title: "WEBSITE", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"},
                            {image: "https://uxwing.com/wp-content/themes/uxwing/download/07-web-app-development/data-scientist.svg", 
                            title: "ANALYTICS", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"}]} />

      <CardComponent header="Card Component" card={true} services={false}
                    data={[{image: "https://scorelab.org/logos/projects/dronesym.png", title: "Dronesym", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                            buttonText: "All Services", buttonLink: "/"},
                            {image: "https://scorelab.org/logos/projects/parks.png", title: "Parks", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                            buttonText: "All Services", buttonLink: "/"},
                            {image: "https://scorelab.org/logos/projects/bassa.png", title: "Bassa", 
                            description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution", 
                            buttonText: "All Services", buttonLink: "/"}]} />  

      <ComingsoonComponent header="Countdown" image="https://scorelab.org/images/joinTeam.png" buttonLink="/" 
                          countdownText="Coming soon!" deployDate="1 Jan, 2022 00:00:00" buttonText="Explore" 
                          message="The new version of this package is coming soon!" />

      <CarouselComponent data={[{title: "LabelLab", content: "Lorem ipsum sample data", 
                                image: "https://scorelab.org/logos/projects/labellab.png"},
                                {title: "Dronesym", content: "Lorem ipsum sample data", 
                                image: "https://scorelab.org/logos/projects/dronesym.png"},
                                {title: "Senz", content: "Lorem ipsum sample data", 
                                image: "https://scorelab.org/logos/projects/senz.png"}]}
                                header="Carousel" />

      <DescriptionComponent title="Description Container" 
                            subTitle="This component can be used to declare description regarding of a particular instance"
                            image="https://scorelab.org/images/community.png"
                            mainText="Your main text here"
                            sideComponent={{content: "content of side component"}}/>

      <FaqComponent header="Frequently Asked Questions"
                    data={[{title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                            content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                          {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                            content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                          {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                            content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                          {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                            content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},
                          {title: "Lorem ispum is a sample text which can be used to simply populate the data to check interface", 
                            content: "Lorem ispum is a sample text which can be used to simply populate the data to check interface"},]} />

      <FooterComponent socialLinks={{facebook: "/", gitter: "/", twitter: "/", github: "/", 
                          linkedin:"/", medium:"/"}} mainText="Copyright © SCoRe Lab" />

      <HeaderComponent mainText="WELCOME TO SCoRe LAB" 
                      subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." 
                      buttonText="Explore" buttonLink="/"
                      image="https://scorelab.org/images/community.png" small={false} />

      <LetterAvatar name="Yash Vardhan" bgColor="green" />

      <Partner header="Partner-With-Us" mainText="Collaborate with us" contactText="contact us" contactLink="/" 
              buttonText="Form" buttonLink="/" image="https://scorelab.org/images/joinTeam.png" 
              subText="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools." />

      <SignupAndLogin signupMessage="Signup" loginMessage="Login" handleSignup={() => {}} handleLogin={() => {}} />

      <Pricing title="Subscription Charges" header="Pricing" description="sample-description"
              plans={[{plan: "BASIC", description: "sample", price: 30, 
                        items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                        buttonText: "Explore", buttonLink: "/"},
                      {plan: "ADVANCE", description: "sample", price: 40, 
                        items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                        buttonText: "Explore", buttonLink: "/"},
                      {plan: "PRO", description: "sample", price: 50, 
                        items: ["Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample", "Lorem Ipsum Text Example Sample"], 
                        buttonText: "Explore", buttonLink: "/"}]} />

      <ImageAvatar image="https://yashvardhanportfolio.netlify.app/static/media/yash%20(2).ca34b90c.jpg" />

      <PageNotFound header="404 Component" image="https://scorelab.org/images/404.png" mainText="PAGE NOT FOUND" 
                    subText="The requested page does not exists" />

      <Statistics header="Statistics" title="Numbers At a Glance" 
                  description="The SCoRe Lab has conducted research covering various aspects of sensor networks, embeded systems, digital forensic, information security, mobile applications, cloud, blockchain and software tools."
                  image="https://scorelab.org/images/community.png" 
                  data={[{name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, 
                        {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}, {name: "Users", stat: "10K"}]} />

      <Spinners animation="border" variant="success" size="md"
                icon={true} spinner={true} />

      <Stepper direction="vertical" currentStep={2} 
              steps={["Fork the Project", "Clone the Repo", "Local Setup", "Talk to Community", "Send PRs", "PRs get reviewed"]} />

      <Stepper direction="horizontal" currentStep={4} 
              steps={["Fork the Project", "Clone the Repo", "Local Setup", "Talk to Community", "Send PRs", "PRs get reviewed"]} />

      <GoogleMap mapId="pb=!1m18!1m12!1m3!1d3650.1185838921524!2d86.43901351493429!3d23.814381884557864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6bc9fac678481%3A0x122cb1d133a89995!2sIndian%20Institute%20of%20Technology%20(Indian%20School%20of%20Mines)%2C%20Dhanbad!5e0!3m2!1sen!2sin!4v1593296068669!5m2!1sen!2sin" 
                header="Map" width="90%" height="500px" />

      <TrustedBy title="Our Collaborators" column={2}
                description="Proud Collaborators and Industry Partners"
                data={[{img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/kotton.jpg", text: "Kotton"},
                {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/edge.jpg", text: "Edge"},
                {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/version2.jpg", text: "Version 2.0"},
                {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/noon.jpg", text: "Neon"},
                {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/jcnichols.jpg", text: "Nichollas"},
                {img: "https://deliciousthemes.com/wp-content/uploads/black-and-white-logos/pet-wise.jpg", text: "Petwise"},]} />

      <ProgressBar data={[{bgcolor: "#51ad28", completed: 80, text: "EXAMPLE 1"}, 
                          {bgcolor: "#E33F3F", completed: 60, text: "EXAMPLE 2"}, 
                          {bgcolor: "#24598B", completed: 90, text: "EXAMPLE 3"}]} colHeight={25} colWidth="300px" />

      <ImageGrid size={6} images={[{imageUrl: "https://scorelab.org/images/community.png", imageText: "SCoRe Lab"}, 
                                  {imageUrl: "https://scorelab.org/images/joinTeam.png", imageText: "OUR TEAM"}]} 
                header="ImageGrid" row={false}
                categories={false} categoryData={[{text: "text", color: "#e52165", route: "/", image: "https://scorelab.org/images/community.png"}]} />

      <SearchBar handleSearch={() => console.log("Hello")} placeHolder="Search Items" header="Search Bar" />

      <Testimonial header="Testimonial"
                  data={[{name: "Yash", image: "https://desklib.com/static/src/assets/images/v2/profile_1.svg", 
                          description: "What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.", 
                          rating: "5"},
                          {name: "Harshita", image: "https://desklib.com/static/src/assets/images/v2/profile_2.svg", 
                          description: "What does Lorem Ipsum mean? Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements.", 
                          rating: "4"}]} />

      <Timestamp image="https://scorelab.org/images/community.png" firstName="SCoRe Lab" buttonText="Home" 
                buttonLink="/" message="sample-message" />

      <LinksList links={[{"name": "Sample1", "url": "https://google.com"},
                        {"name": "Sample2", "url": "https://google.com"},
                        {"name": "Sample3", "url": "https://google.com"},]} 
                isIcon={true} iconName="faLink" />

      <VideoPlayer width="350px" height="215px" videoSrcURL="https://www.youtube.com/embed/GuvAMcsoreI" title="Gatsby Js Tutorial" 
                  header="Video" />

      <NavBar logo="https://scorelab.org/logos/main-logo.jpeg"
              links={[{path: "sample-link", isSpecial: false, isExternal: false, name: "Home"}, 
                      {path: "sample-link", isSpecial: false, isExternal: false, name: "Team"}, 
                      {path: "sample-link", isSpecial: false, isExternal: false, name: "Projects"}, 
                      {path: "sample-link", isSpecial: false, isExternal: false, name: "Services"}, 
                      {path: "sample-link", isSpecial: false, isExternal: true, name: "Pricing"}, 
                      {path: "sample-link", isSpecial: true, isExternal: false, name: "Contact"},]}  />
    </div>
  );
}

export default App;
