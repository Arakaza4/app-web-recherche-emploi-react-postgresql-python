import React, { useState } from 'react';
import '../styles/JobList.css'

function JobList() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: 'Titre de l\'offre 1',
      salary: 'Salaire 1',
      location: 'Lieu de travail 1',
      description: 'Description détaillée de l\'offre 1',
    },
    {
        id: 2,
        title: 'Titre de l\'offre 2',
        salary: 'Salaire 2',
        location: 'Lieu de travail 2',
        description: 'Description détaillée de l\'offre 2',
    },
    {
        id: 3,
        title: 'Titre de l\'offre 3',
        salary: 'Salaire 3',
        location: 'Lieu de travail 3',
        description: 'Description détaillée de l\'offre 3',
    },
    {
      id: 4,
      title: 'Titre de l\'offre 4',
      salary: 'Salaire 4',
      location: 'Lieu de travail 4',
      description: 'Description détaillée de l\'offre 4',
  },


  ]);

  const [selectedJob, setSelectedJob] = useState(null);

  const handleLearnMore = (job) => {
    setSelectedJob(job);
  };

  const handleApply = (job) => {
    // Ici, je vais ajouter la logique pour gérer la candidature à l'offre
    console.log('Postuler pour :', job.title);
  };

  return (
    <div className="container-job">
      <h3>Offres d'emplois disponibles</h3>
      {jobs.map((job) => (
        <div key={job.id} className="job-item">
          <h4>{job.title}</h4>
          <p>{job.salary}</p>
          <p>{job.location}</p>
          {selectedJob === job ? (
            <div>
              <p>{job.description}</p>
              <button onClick={() => handleApply(job)}>Postuler</button>
            </div>
          ) : (
            <button onClick={() => handleLearnMore(job)}>Learn more</button>
          )}
        </div>
      ))}
    </div>
  );
}

export default JobList;
