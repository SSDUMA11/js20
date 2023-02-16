let cssDisplay = prompt('Value css properties Display ?');
switch(cssDisplay){
    case 'block':
        alert('display: block');
        break;
    case 'flex':
        alert('display: flex');
        break;
    case 'grid':
        alert("display: grid" );
        break;
    case 'inline':
        alert('display: inline' );
        break;
    case 'none':
        alert('display: none');
        break;
    default:
        alert('Set \'display: inline-block;\'');
 }