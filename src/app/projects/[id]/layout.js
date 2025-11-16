// Mapping for project IDs that have different folder names
const PROJECT_FOLDER_MAP = {
  'Portals': 'Portal',
  'TerrainLibrary': 'TerrainLib',
};

// Project metadata mapping
const PROJECT_METADATA = {
  'Portals': {
    title: 'Portals',
    description: 'An interactive portal rendering project',
  },
  'TerrainLibrary': {
    title: 'Terrain Library',
    description: 'A comprehensive terrain generation library',
  },
  // Add more projects as needed
};

export async function generateMetadata({ params }) {
  const { id } = params;
  const projectMeta = PROJECT_METADATA[id];

  if (projectMeta) {
    return {
      title: projectMeta.title,
      description: projectMeta.description,
      openGraph: {
        title: `${projectMeta.title} | Jonte`,
        description: projectMeta.description,
      },
    };
  }

  // Default metadata for projects not in the mapping
  return {
    title: id,
    description: `View ${id} project details and demonstrations`,
    openGraph: {
      title: `${id} | Jonte`,
      description: `View ${id} project details and demonstrations`,
    },
  };
}

export default function ProjectLayout({ children }) {
  return children;
}
