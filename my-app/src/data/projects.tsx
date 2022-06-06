export type Project = {
    type: string,
    title: string,
    description: string,
    stack: string[],
    github?: string,
    external?: string,
}

export const projectData: Project[] = [
  {
    type: 'Journal Article',
    title: 'Electromagnetic Simulations',
    description: 'A scalable computational model for simulating electric motors to support the electrification of heavy-duty vehicles and the aviation sector.',
    stack: [
      'Py3', 
      'Scientific Computing', 
      'FEniCSx', 
      'Docker', 
      'MPI', 
      'Parallelisation', 
      'HPC', 
      'FEM',
    ],
    github: 'https://github.com/jdmcdonagh/PMSMx',
    external: 'https://doi.org/10.1016/j.finel.2022.103755',
  },
  {
    type: 'Volunteering',
    title: '3D-Printed Prostheses',
    description: 'Member of the e-NABLE community who use 3D printing to provide affordable and personalised prosthetics to those with limb loss/differences.',
    stack: [
      '3D Printing', 
      'CAD/CAM',
      'Manufacturing',
    ],
    github: 'https://github.com/jdmcdonagh/e-nable',
    external: 'https://enablingthefuture.org',
  },
  {
    type: 'Personal Project',
    title: 'jmcdonagh.com',
    description: 'Personal website developed from the ground up using React to host my projects on.',
    stack: [
      'React', 
      'TypeScript', 
      'styled-components',
      'Cloudflare',
    ],
    github: 'https://github.com/jdmcdonagh/jmcdonagh.com',
  },
];