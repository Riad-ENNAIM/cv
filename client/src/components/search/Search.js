import React, { useContext } from 'react';
import Card from '../cards/Card';

import ProfileContext from '../../context/profile/profileContext';

export const Search = () => {
  const profileContext = useContext(ProfileContext);
  const { serchResult, language } = profileContext;

  return (
    <div id="search">

      {
        serchResult && serchResult.experiences && serchResult.experiences.length > 0 &&
        <>
          <div className="search-title container align-items-center justify-content-center">{language === 'eng' ? 'Experiences' : 'Expériences'}</div>
          {
            serchResult.experiences.map(experience => {
              const data = {
                title: experience.title,
                description: experience.company,
                info: experience.location,
                start: experience.start,
                end: experience.end,
                isCurrent: experience.isCurrent,
                notes: experience.tasks,
                supplements: experience.technologies
              };
              return <Card key={experience._id} data={data} />
            })
          }
        </>
      }

      {
        serchResult && serchResult.projects && serchResult.projects.length > 0 &&
        <>
          <div className="search-title container align-items-center justify-content-center">{language === 'eng' ? 'Projects' : 'Projets'}</div>
          {
            serchResult.projects.map(project => {
              const data = {
                title: project.title,
                description: project.client,
                info: project.technology,
                start: project.start,
                end: project.end,
                isCurrent: project.isCurrent,
                notes: project.tasks
              };
              return <Card key={project._id} data={data} />
            })
          }
        </>
      }

      {
        serchResult && serchResult.trainings && serchResult.trainings.length > 0 &&
        <>
          <div className="search-title container align-items-center justify-content-center">{language === 'eng' ? 'Trainings' : 'Formations'}</div>
          {
            serchResult.trainings.map(training => {
              const data = {
                title: training.title,
                description: training.school,
                info: training.location,
                start: training.start,
                end: training.end,
                isCurrent: training.isCurrent
              };
              return <Card key={training._id} data={data} />
            })
          }
        </>
      }
      
    </div>
  );
}

export default Search;
