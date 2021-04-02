/** @jsx createElement */
import { createElement } from 'rax';
import { withRouter } from 'rax-use-router';
 
function NotFound(props) {
  return <button onClick={ () => props.history.replace('/home') }>Go home</button>
}
export default withRouter(NotFound);