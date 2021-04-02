/** @jsx createElement */
import { createElement, Fragment } from 'rax';
import { useRouter } from 'rax-use-router';
import { createHashHistory } from 'history';
import AnimUI from './components/AnimUI';
import LoadingUI from './components/LoadingUI';
import NotFound from './components/NotFound';
const config = () => {
    return {
      history: createHashHistory(),
      routes: [
        {
          path: '',
          component: <div>Hello</div>,
        },
        {
          path: '/home',
          routes: [
            // Dynamic Component 
            {
              path: '/tt',                  // www.example.com/home
              component: (props) => {
                return (
                  <div>
                    <button onClick={() => props.history.push('/foo')}>go foo</button>
                    <button onClick={() => props.history.push('/bar')}>go bar</button>
                    <button onClick={() => props.history.push('/home/jack')}>go jack</button>
                  </div>
                )
              },
            },
            // URL Parameters
             {
              path: '/:username',        // www.example.com/home/xxx
              component: (props) => {
                return (
                  <div>
                    <p>{props.username}</p>
                    <button onClick={() => props.history.push('/home')}>Go home</button>
                  </div>
                )
              }
            }
          ]
        },
        {
          path: '/anim',                 // www.example.com/foo
          component:  <AnimUI />,  
        },
        {
          path: '/loading',                 // www.example.com/foo
          component: () => <LoadingUI />,  
        },
        // No match (404)
        {
          component: () => <NotFound />,
        }
      ]
    }
  };
   
  export default function Example() {
    const { component } = useRouter(config);
    return component;
  }