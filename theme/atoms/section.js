import variables from '../core/variables'

const section = {}

section.default = `
    display: block;
    margin-right: auto;
    margin-left: auto;
    position: relative;
    padding-top: 20px;
    @media ${variables.smallAndDown}{
        width: 100%;
    }
`

section.title = `
    font-family: NHGDSPBold, Arial, sans-serif;
    font-size: 3.75rem;
    cursor: pointer;
    transition: opacity 0.3s;
    text-transform: capitalize;
    text-align: center;
    position: relative;
    &:after {
    content: '';
    position: absolute;
    }
    @media ${variables.smallAndDown}{
        font-size: 2.75rem;
    }
`
export default section