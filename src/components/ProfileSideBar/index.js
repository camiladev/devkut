import Box from '../Box/styled.js'
import { AlurakutProfileSidebarMenuDefault } from '../../lib/AlurakutCommons';

export function ProfileSidebar(propriedades) {
    return (
      <Box as="aside">
        <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
        <hr />
  
        <p>
          <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
            @{propriedades.githubUser}
          </a>
        </p>
        <hr />
  
        <AlurakutProfileSidebarMenuDefault />
      </Box>
    )
  }

  