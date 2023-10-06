import React from "react";
import {
  AccentureImg,
  AdhawkImg,
  BentoMlImg,
  CSEImg,
  CitadelImg,
  CockroachlabsImg,
  CohereImg,
  DRWImg,
  EthglobalImg,
  GastronomousImg,
  WorkleapImg,
  HRTImg,
  //IBMImg,
  IntactImg,
  JaneStreetImg,
  KPMGImg,
  NeoImg,
  OldMissionImg,
  OTPPImg,
  PandGImg,
  QuestradeImg,
  RbcImg,
  ReplitImg,
  SunlifeImg,
  UbisoftImg,
  VoiceflowImg,
  WarpImg,
  DatabricksImg,
  GenesysImg,
  SyroImg,
  ViamImg,
  TunnelImg,
  MathsocImg,
  NeteaseImg,
  ConradImg,
  BloombergImg,
  CommunitechImg,
  TDImg,
  BaylisMedTechImg,
  KleinerPerkinsImg,
  ICPImg,
  SolanaImg,
  UWEngImg,
  TechyonImg,
  VelocityImg,
  VelocityFundImg,
} from "src/assets/img";
import { SponsorLink } from "src/components/base";
import { Body } from "src/styles";
import { mediaQueries } from "src/utils";
import styled from "styled-components";

interface Sponsor {
  alt: string;
  src: string;
  link: string;
  title: string;
  text?: JSX.Element;
}

const TextDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 422px;
  @media screen and (min-width: 835px) and (max-width: 1200px) {
    max-width: 632px;
  }
  ${mediaQueries.medium} {
    max-width: 632px;
  }
`;

const ArrowLinkStyled = styled.div`
  display: flex;
  padding-top: 16px;
  gap: 8px;
  align-items: center;
`;

const BodyText = styled(Body)`
  color: ${({ theme }) => theme.colors.text.light.white};
`;

//Gold Sponsors
const rbc: Sponsor = {
  link: "https://jobs.rbc.com/ca/en/be-whats-next",
  alt: "Rbc logo",
  src: RbcImg,
  title: "RBC",
  text: (
    <TextDiv>
      <BodyText>
        You may know that RBC is Canada&apos;s largest bank, with 98,000+
        employees and 17 million clients globally. But did you know we are also
        one of Canada&apos;s largest tech employers? With over 10,000 employees,
        our technologists apply imagination, insight, and cutting-edge
        technology to ensure our clients thrive and communities prosper.
      </BodyText>
      <br />
      <BodyText>
        Tech @ RBC offers hundreds of student and new grad roles, with
        opportunities to learn, grow and work with purpose.
      </BodyText>
      <br />
      <BodyText>
        From Developers to Data Scientists, from Cyber Threat Hunters to AI and
        ML Specialists, we inspire the next generation of brilliant minds to be
        the future of tech.
      </BodyText>
      <br />
      <BodyText>
        If you&apos;re interested in exploring a broad range of exciting
        technology career paths, click below to view our Student Co Op and New
        Graduate Full Time job opportunities.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://jobs.rbc.com/ca/en/be-whats-next"
          target="_blank"
          rel="noreferrer"
        >
          Explore Tech@RBC
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

export const goldSponsors = [rbc];

//Silver Sponsors
const citadel: Sponsor = {
  link: "https://www.citadel.com/",
  alt: "Citadel logo",
  src: CitadelImg,
  title: "Citadel",
};

const cockroachlabs: Sponsor = {
  link: "https://www.cockroachlabs.com/",
  alt: "Cockroach Labs logo",
  src: CockroachlabsImg,
  title: "Cockroach Labs",
  text: (
    <TextDiv>
      <BodyText>
        Cockroach University is a free online learning platform from Cockroach
        Labs that covers distributed databases, cloud-native applications,
        general purpose SQL databases & much more!
      </BodyText>
      <br />
      <BodyText>
        Get started today with a self-paced course that introduces the core
        concepts behind distributed SQL databases and describes how CockroachDB
        fits into this landscape. You will learn what differentiates CockroachDB
        from both legacy SQL and NoSQL databases, and how CockroachDB ensures
        consistent transactions without sacrificing scale and resiliency.
      </BodyText>
      <br />
      <BodyText>
        Be sure to post your certification of completion to LinkedIn so
        companies looking for people with CockroachDB experience can find you.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://university.cockroachlabs.com/courses/course-v1:crl+intro-to-distributed-sql-and-cockroachdb+self-paced/about?utm_source=hackthenorth2023&utm_medium=event&utm_campaign=hackathon"
          target="_blank"
          rel="noreferrer"
        >
          Explore Cockroach University
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const cohere: Sponsor = {
  link: "https://cohere.com/",
  alt: "Cohere logo",
  src: CohereImg,
  title: "Cohere",
  text: (
    <TextDiv>
      <BodyText>
        Cohere empowers every developer and enterprise to build amazing products
        and capture true business value with language AI. Our models power
        interactive chat features, generate text for product descriptions, blog
        posts, and articles, and capture the meaning of text for search, content
        moderation, and intent recognition.
      </BodyText>
      <br />
      <BodyText>
        We&apos;re a series C remote-first company with offices in Toronto, Palo
        Alto, SF, and London. Building the future of language AI for business,
        we are also a team ML/AI engineers, thinkers, and champions who are
        passionate about exploring the potential of language AI to make our
        world a better place. With diverse experiences and perspectives, we work
        together to bring advancements in language AI to developers everywhere.
      </BodyText>
      <br />
      <BodyText>
        Join the Cohere Discord Community, and try out our models on the Cohere
        playground!
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://cohere.com/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Cohere
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const ethglobal: Sponsor = {
  link: "https://ethglobal.com/",
  alt: "Ethglobal logo",
  src: EthglobalImg,
  title: "ETHGlobal",
  text: (
    <TextDiv>
      <BodyText>
        ETHGlobal is the most valuable builder&apos;s community in Web3. Started
        by the founders of Hack the North we support Web3 builders at any point
        in their journey through virtual and in-person hackathons and
        educational summits.
      </BodyText>
      <br />
      <BodyText>Join the community and our events today:</BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="http://ethglobal.com?ref=hackthenorth"
          target="_blank"
          rel="noreferrer"
        >
          Explore ETHGlobal
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const hrt: Sponsor = {
  link: "https://www.hudsonrivertrading.com/campus-recruiting/",
  alt: "Hudson River Trading logo",
  src: HRTImg,
  title: "Hudson River Trading",
  text: (
    <TextDiv>
      <BodyText>
        Hudson River Trading brings a scientific approach to trading financial
        products. We have built one of the world&apos;s most sophisticated
        computing environments for research and development. Our researchers are
        at the forefront of innovation in the world of algorithmic trading. At
        HRT we come from all sorts of backgrounds: mathematics, computer
        science, statistics, physics, and engineering. We&apos;re a community of
        self-starters, motivated by the excitement of being at the cutting edge
        of automated trading. We&apos;re friends and colleagues, whether we are
        sharing a meal, playing the latest board game, or writing elegant code.
        We embrace a culture of togetherness that extends far beyond the walls
        of our office.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://www.hudsonrivertrading.com/campus-recruiting/"
          target="_blank"
          rel="noreferrer"
        >
          Explore Student Opportunities
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const intact: Sponsor = {
  link: "https://careers.intactfc.com/ca/en/home",
  alt: "Intact logo",
  src: IntactImg,
  title: "Intact",
  text: (
    <TextDiv>
      <BodyText>At Intact, insurance is about people.</BodyText>
      <br />
      <BodyText>
        From coast to coast, one in five Canadians count on Intact to protect
        what matters most to them. As the largest provider of property and
        casualty (P&C) insurance in Canada and a leading provider of specialty
        insurance in North America, they are steering the industry towards an
        exciting future.
      </BodyText>
      <br />
      <BodyText>
        Along with the advances Intact is making with insurance technology and
        digital tools, they&apos;re building partnerships that are defining: the
        future of transportation; how we use big data; how people interact with
        their homes, cars and environment; and how to be collaborative consumers
        within the sharing economy. Above all, Intact is focused on providing a
        customer experience that is second-to-none. While their Claims teams are
        focused on getting customers back on track after a loss, teams like the
        intact lab are busy leveraging modern technology and machine-learning
        (A.I.) to transform the customer experience.
      </BodyText>
      <ArrowLinkStyled>
        <SponsorLink
          href="https://careers.intactfc.com/ca/en/home"
          target="_blank"
          rel="noreferrer"
        >
          Explore Intact Careers
        </SponsorLink>
      </ArrowLinkStyled>
    </TextDiv>
  ),
};

const mathsoc: Sponsor = {
  link: "https://mathsoc.uwaterloo.ca/",
  alt: "MathSoc Logo",
  src: MathsocImg,
  title: "MathSoc",
};

const td: Sponsor = {
  link: "https://jobs.td.com/en-CA/job-search-results/?keyword=%23CoopP%26T",
  alt: "TD Logo",
  src: TDImg,
  title: "TD",
};

const solana: Sponsor = {
  link: "https://solana.com/",
  alt: "Solana Logo",
  src: SolanaImg,
  title: "Solana",
};

export const silverSponsors = [
  citadel,
  cockroachlabs,
  cohere,
  ethglobal,
  hrt,
  intact,
  mathsoc,
  td,
  solana,
];

export const carouselSponsors = [
  rbc,
  cohere,
  hrt,
  intact,
  ethglobal,
  cockroachlabs,
];

//Bronze Sponsors
const accenture: Sponsor = {
  link: "https://www.accenture.com/ca-en",
  alt: "Accenture logo",
  src: AccentureImg,
  title: "Accenture",
};

const adhawk: Sponsor = {
  link: "https://www.adhawkmicrosystems.com/",
  alt: "Adhawk logo",
  src: AdhawkImg,
  title: "Adhawk",
};

const cse: Sponsor = {
  link: "https://www.cse-cst.gc.ca/en",
  alt: "CSE logo",
  src: CSEImg,
  title: "CSE",
};

const drw: Sponsor = {
  link: "https://www.drw.com/",
  alt: "DRW logo",
  src: DRWImg,
  title: "DRW",
};

const workleap: Sponsor = {
  link: "https://workleap.com/",
  alt: "Workleap logo",
  src: WorkleapImg,
  title: "Workleap",
};

/*const ibm: Sponsor = {
  link: "https://www.ibm.com/ca-en/employment/entrylevel/",
  alt: "IBM logo",
  src: IBMImg,
  title: "IBM",
};*/

const janestreet: Sponsor = {
  link: "https://www.janestreet.com/",
  alt: "JaneStreet logo",
  src: JaneStreetImg,
  title: "JaneStreet",
};

const kpmg: Sponsor = {
  link: "https://kpmg.com/ca/en/home.html",
  alt: "KPMG logo",
  src: KPMGImg,
  title: "KPMG",
};

const oldmission: Sponsor = {
  link: "https://www.oldmissioncapital.com/",
  alt: "Old Mission logo",
  src: OldMissionImg,
  title: "Old Mission",
};

const otpp: Sponsor = {
  link: "https://www.otpp.com/en-ca/",
  alt: "Ontario Teachers Pension Plan logo",
  src: OTPPImg,
  title: "Ontario Teachers Pension Plan",
};

const pandg: Sponsor = {
  link: "https://www.pg.ca/en-ca/",
  alt: "Procter & Gamble",
  src: PandGImg,
  title: "Procter & Gamble",
};

const questrade: Sponsor = {
  link: "https://www.questrade.com/",
  alt: "Questrade logo",
  src: QuestradeImg,
  title: "Questrade",
};

const replit: Sponsor = {
  link: "https://replit.com/",
  alt: "Replit logo",
  src: ReplitImg,
  title: "Replit",
};

const sunlife: Sponsor = {
  link: "https://sunlife.wd3.myworkdayjobs.com/Campus?utm_campaign=PostBeyond&utm_source=LinkedIn&utm_medium=11948&utm_term=DBTS%20Student%20Connections&utm_content=EVP",
  alt: "Sunlife logo",
  src: SunlifeImg,
  title: "Sunlife",
};

const ubisoft: Sponsor = {
  link: "https://toronto.ubisoft.com/",
  alt: "Ubisoft logo",
  src: UbisoftImg,
  title: "Ubisoft",
};

const voiceflow: Sponsor = {
  link: "https://www.voiceflow.com/",
  alt: "Voiceflow logo",
  src: VoiceflowImg,
  title: "Voiceflow",
};

const databricks: Sponsor = {
  link: "https://www.databricks.com/",
  alt: "Databricks logo",
  src: DatabricksImg,
  title: "Databricks",
};

const genesys: Sponsor = {
  link: "https://www.genesys.com/",
  alt: "Genesys logo",
  src: GenesysImg,
  title: "Genesys",
};

const viam: Sponsor = {
  link: "https://www.viam.com/",
  alt: "Viam logo",
  src: ViamImg,
  title: "Viam",
};

const netease: Sponsor = {
  link: "https://www.neteasegames.com/",
  alt: "Netease logo",
  src: NeteaseImg,
  title: "Netease",
};

const bloomberg: Sponsor = {
  link: "https://www.bloomberg.com/",
  alt: "Bloomberg logo",
  src: BloombergImg,
  title: "Bloomberg",
};

const icp: Sponsor = {
  link: "https://internetcomputer.org/",
  alt: "Internet Computer Logo",
  src: ICPImg,
  title: "Internet Computer Protocol",
};

export const bronzeSponsors = [
  accenture,
  adhawk,
  cse,
  drw,
  workleap,
  janestreet,
  kpmg,
  oldmission,
  otpp,
  pandg,
  questrade,
  replit,
  sunlife,
  ubisoft,
  voiceflow,
  databricks,
  genesys,
  viam,
  netease,
  bloomberg,
  icp,
];

//startups

const bentoml: Sponsor = {
  link: "https://www.bentoml.com/",
  alt: "BentoML logo",
  src: BentoMlImg,
  title: "BentoML",
};

const gastronomous: Sponsor = {
  link: "https://www.gastronomous.ca/careers",
  alt: "Gastronomous logo",
  src: GastronomousImg,
  title: "Gastronomous",
};

const warp: Sponsor = {
  link: "https://www.warp.dev/",
  alt: "Warp logo",
  src: WarpImg,
  title: "Warp",
};

const syro: Sponsor = {
  link: "https://www.syro.com/",
  alt: "Syro logo",
  src: SyroImg,
  title: "Syro",
};

const tunnel: Sponsor = {
  link: "https://tunnel.dev",
  alt: "Tunnel logo",
  src: TunnelImg,
  title: "Tunnel",
};

const baylis: Sponsor = {
  link: "https://baylismedtech.com/",
  alt: "Baylis Med Tech logo",
  src: BaylisMedTechImg,
  title: "Baylis Med Tech",
};

export const startUps = [bentoml, gastronomous, warp, syro, tunnel, baylis];

//partners

const uweng: Sponsor = {
  link: "https://uwaterloo.ca/engineering/",
  alt: "University of Waterloo Faculty of Engineering Logo",
  src: UWEngImg,
  title: "University of Waterloo Faculty of Engineering",
};

const techyon: Sponsor = {
  link: "https://techyon.org/",
  alt: "Techyon Logo",
  src: TechyonImg,
  title: "Techyon",
};

const neo: Sponsor = {
  link: "https://neo.com/",
  alt: "Neo logo",
  src: NeoImg,
  title: "Neo",
};

const conrad: Sponsor = {
  link: "https://uwaterloo.ca/conrad-school-entrepreneurship-business?utm_source=HTN&utm_medium=website&utm_campaign=Hack%20the%20North",
  alt: "Conrad logo",
  src: ConradImg,
  title: "Conrad",
};

const communitech: Sponsor = {
  link: "https://communitech.ca/",
  alt: "Communitech logo",
  src: CommunitechImg,
  title: "Communitech",
};

const kleinerperkins: Sponsor = {
  link: "https://www.kleinerperkins.com/",
  alt: "Kleiner Perkins",
  src: KleinerPerkinsImg,
  title: "Kleiner Perkins",
};

const velocity: Sponsor = {
  link: "https://velocityincubator.com/",
  alt: "Velocity",
  src: VelocityImg,
  title: "Velocity",
};

const velocityfund: Sponsor = {
  link: "https://velocity.fund/",
  alt: "Velocity Fund",
  src: VelocityFundImg,
  title: "Velocity Fund",
};

export const partners = [
  uweng,
  techyon,
  neo,
  conrad,
  communitech,
  kleinerperkins,
  velocity,
  velocityfund,
];
