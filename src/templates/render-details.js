export const renderDetails = ({ title, posterPath, overview }) => `
  <div class="panel">
        <div class="panel-head">
            <h2 class="center">${title}</h2>
        </div>
        
        <div class="panel-body">
            <img class="center" src="${posterPath}">
            <p class="overview">${overview}</p>
        </div>

        <div class="panel-footer center">
            <h4 class="center">
                Recommendations:
            </h4>    
        </div>
    </div>
`;
