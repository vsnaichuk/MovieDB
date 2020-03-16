export const renderListItem = ({ id, title }) => `    
  <li class="panel-head">
    ${title}
    <button class="btn button-primary button-small" data-id="${id}">Get Movie</button>
  </li>
`;
