import React, { lazy, Suspense } from "react";
// import OrganizerBanner from "src/components/Banner/OrganizerBanner";
// import VolunteerMentorWorkshopBanner from "src/components/Banner/VolunteerMentorWorkshopBanner";
import { Navbar } from "src/components";
import { Layout } from "src/components/base";
import { Heading3 } from "src/styles";
import styled from "styled-components";

const Hero = lazy(() => import("src/sections/Hero"));
const History = lazy(() => import("src/sections/History"));
const Showcase = lazy(() => import("src/sections/Showcase"));
const TalkingPoints = lazy(() => import("src/sections/TalkingPoints"));
const Stories = lazy(() => import("src/sections/Stories"));
const Judges = lazy(() => import("src/sections/Judges"));
const Sponsors = lazy(() => import("src/sections/Sponsors/"));
const FAQ = lazy(() => import("src/sections/FAQ"));
const Footer = lazy(() => import("src/sections/Footer"));

const IndexPage: React.FC = () => (
  <Layout>
    <Navbar />
    <Suspense fallback={<div />}>
      <Hero />
    </Suspense>
    <Suspense fallback={<div />}>
      <History />
    </Suspense>
    <Suspense fallback={<div />}>
      <Showcase />
    </Suspense>
    <Suspense fallback={<div />}>
      <TalkingPoints />
    </Suspense>
    <Suspense fallback={<div />}>
      <Stories />
    </Suspense>
    <Suspense fallback={<div />}>
      <Judges />
    </Suspense>
    <Suspense fallback={<div />}>
      <Sponsors />
    </Suspense>
    <Suspense fallback={<div />}>
      <FAQ />
    </Suspense>
    <Suspense fallback={<div />}>
      <Footer />
    </Suspense>
  </Layout>
);

export default IndexPage;
