import React, { useState } from 'react'
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  Column2,
} from '../SectionElements'
import {
  CompanyList,
  CompanyItem,
  Title,
  CompanyLink,
  Period,
  Description,
  DescriptionItem,
} from './ExperiencesElements'

const experiences = [
  {
    id: 1,
    period: 'depuis 2019',
    company: 'freelance',
    website: '',
    title: 'DEVELOPPEUSE WEB FREELANCE',
    description: [
      `Création d'application web (SaaS) sur mesure répondant aux besoins de diverses PME entammant leur transformation digitale (BTP, organismes de formation).`,
      `Analyse des besoins et de l'existant, développement en mode agile.`,
    ],
  },
  {
    id: 2,
    period: '2020 - 2021',
    company: 'So App',
    website: 'https://www.so-app.fr/',
    title: 'CONSULTANTE EN TRANSFORMATION DIGITALE\n & DEVELOPPEUSE WEB',
    description: [
      `Stratégie et mise en place de la transformation interne, définition et optimisation de process.`,
      `Redéfinition des Vision et Mission de l'entreprise. Digitalisation de la relation client et fournisseur.`,
      `Conseil et accompagnement en Stratégie de développement.`,
      `Conseil en transformation digitale des clients (associations et organismes de formation).`,
      `Tech : refonte totale de l'outil de gestion interne (SaaS)`,
    ],
  },
  {
    id: 3,
    period: '2019 - 2020',
    company: 'Europcar Mobility Group',
    website: 'https://europcar-mobility-group.com/',
    title: 'PRODUCT OWNER',
    description: [
      `Rôle de product owner au sein d'une Product Team. Rédaction de User Stories et priorisation du backlog.`,
      `Application de la méthodologie Scrum, puis Kanban.`,
      `Travail en collaboration avec les Business Owner, UX/UI designer.`,
      `Organisation d'atelier (vision produit, storymapping, atelier client).`,
      `Définition de KPI, mise en place et suivi du tracking. Suivi des livraisons, applications internes & applications B2C (web & mobile).`,
    ],
  },
  {
    id: 4,
    period: '2018 - 2019',
    company: 'Innovative Digital Technologies',
    website: 'https://www.idt.pf/',
    title: 'PRODUCT OWNER & SCRUM MASTER',
    description: [
      `Analyse des besoins client, rédaction de dossier d'expression des besoins, modélisation des processus métier, rédaction de spécificités fonctionnelles & User Stories définition et
      conception d'applications web sur-mesure, modélisation du modèle de données, gestion de projets en méthodologie Agile (Scrum).`,
      `Suivi du développement, livraisons, tests, déploiement, phase pilote, ateliers clients, formations, documentation, communication et
      retour sur investissement.`,
      `Rôle de scrum master & product owner.`,
    ],
  },
  {
    id: 5,
    period: '2010 - 2017',
    company: 'Leos',
    website: 'https://www.leos.fr/',
    title: 'DEVELOPPEUSE WEB & CHEF DE PROJET',
    description: [
      `Analyse et traduction des besoins des clients, rédaction de cahiers des charges, conception et maintenance de bases de données (MySQL), développement et déploiement
      d'application web sur-mesure de type intranet, ERP, GED (PHP) orientée EdTech.`,
      `Création de sites internet, rédaction de manuel utilisateur et tutoriel, support utilisateur, formation en clientèle.`,
      `Création et mise en place d'outils de gestion interne (prospection, gestion financière, pilotage des projets, communication, suivi des demandes, statistiques)`,
    ],
  },
]

const Experiences = ({ id, topLine }) => {
  const [info, setInfo] = useState({
    id: experiences[0].id,
    period: experiences[0].period,
    title: experiences[0].title,
    company: experiences[0].company,
    description: experiences[0].description,
    website: experiences[0].website,
  })

  const companyList = experiences.map((item) => (
    <CompanyItem
      className={info.id === item.id && 'active'}
      key={item.id}
      onClick={() => {
        setInfo({
          id: item.id,
          period: item.period,
          title: item.title,
          company: item.company,
          description: item.description,
          website: item.website,
        })
      }}
    >
      {item.company}
    </CompanyItem>
  ))

  return (
    <InfoContainer id={id}>
      <InfoWrapper>
        <InfoRow>
          <Column1>
            <TextWrapper>
              <TopLine>Mes expériences professionnelles</TopLine>
              <Heading>Digitales</Heading>
              <CompanyList>{companyList}</CompanyList>
            </TextWrapper>
          </Column1>
          <Column2>
            <Title>
              {info.title}{' '}
              <CompanyLink href={info.website} target="_blank">
                @{info.company}
              </CompanyLink>
            </Title>
            <Period>{info.period}</Period>

            <Description>
              {info.description.map((item, index) => (
                <DescriptionItem key={index}>{item}</DescriptionItem>
              ))}
            </Description>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

export default Experiences
