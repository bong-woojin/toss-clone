import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './shared/styles/reset.css'
import './shared/styles/tokens.css'
import 'pretendard/dist/web/variable/pretendardvariable-dynamic-subset.css'
import AppLayout from "./layouts/AppLayout.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppLayout />
  </StrictMode>,
)
