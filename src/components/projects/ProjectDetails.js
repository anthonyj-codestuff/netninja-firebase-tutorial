import React from 'react';

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Title - {id}</span>
          <p>blah sergb eer s tg edrthdth df bdf dt hdf bkyu8 k xt gheru   erig gsebrgu rb g  ggb gb erlbdt d  dlgbzdhgb  bgbjkhg.</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by: Me</div>
          <div>19-05-12</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;