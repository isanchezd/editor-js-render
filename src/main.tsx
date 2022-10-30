import { render } from 'preact'
import { Render } from './lib/render'
import './index.css'

render(<Render />, document.getElementById('app') as HTMLElement);
