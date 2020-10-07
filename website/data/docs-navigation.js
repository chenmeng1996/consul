// The root folder for this documentation category is `pages/docs`
//
// - A string refers to the name of a file
// - A "category" value refers to the name of a directory
// - All directories must have an "index.mdx" file to serve as
//   the landing page for the category, or a "name" property to
//   serve as the category title in the sidebar

export default [
  {
    category: 'intro',
    content: [
      {
        category: 'vs',
        content: [
          'zookeeper',
          'chef-puppet',
          'nagios-sensu',
          'skydns',
          'smartstack',
          'serf',
          'eureka',
          'istio',
          'proxies',
          'custom',
        ],
      },
    ],
  },

  {
    category: 'install',
    content: [
      { title: 'Consul Agent', href: '/docs/agent' },
      'glossary',
      'ports',
      'bootstrapping',
      'cloud-auto-join',
      'performance',
      { title: 'Kubernetes', href: '/docs/k8s' },
    ],
  },
  {
    category: 'discovery',
    name: 'Service Discovery',
    content: ['services', 'dns', 'checks'],
  },

  {
    category: 'connect',
    content: [
      'connect-internals',
      'configuration',
      {
        category: 'proxies',
        content: ['envoy', 'built-in', 'integrate'],
      },
      {
        category: 'registration',
        content: ['service-registration', 'sidecar-service'],
      },
      'intentions',
      'intentions-legacy',
      'observability',
      {
        category: 'l7-traffic',
        content: ['discovery-chain'],
      },
      'connectivity-tasks',
      {
        category: 'gateways',
        content: [
          {
            category: 'mesh-gateway',
            content: ['wan-federation-via-mesh-gateways'],
          },

          'ingress-gateway',
          'terminating-gateway',
        ],
      },
      'nomad',
      { title: 'Kubernetes', href: '/docs/k8s/connect' },
      { category: 'native', content: ['go'] },
      {
        category: 'ca',
        content: ['consul', 'vault', 'aws'],
      },
      'dev',
    ],
  },
  {
    category: 'k8s',
    content: [
      {
        category: 'installation',
        name: 'Get Started',
        content: [
          'install',
          {
            category: 'platforms',
            name: 'Platform Guides',
            content: [
              {
                title: 'Minikube',
                href:
                  'https://learn.hashicorp.com/tutorials/consul/kubernetes-minikube?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=mk',
              },
              {
                title: 'Kind',
                href:
                  'https://learn.hashicorp.com/tutorials/consul/kubernetes-kind?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=mk',
              },
              {
                title: 'AKS (Azure)',
                href:
                  'https://learn.hashicorp.com/tutorials/consul/kubernetes-aks-azure?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=aks',
              },
              {
                title: 'EKS (AWS)',
                href:
                  'https://learn.hashicorp.com/tutorials/consul/kubernetes-eks-aws?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=eks',
              },
              {
                title: 'GKE (Google Cloud)',
                href:
                  'https://learn.hashicorp.com/tutorials/consul/kubernetes-gke-google?utm_source=consul.io&utm_medium=docs&utm_content=k8s&utm_term=gke',
              },
              'self-hosted-kubernetes',
            ],
          },
          {
            category: 'deployment-configurations',
            name: 'Deployment Configurations',
            content: [
              'clients-outside-kubernetes',
              'servers-outside-kubernetes',
              'consul-enterprise',
            ],
          },
          {
            category: 'multi-cluster',
            content: ['kubernetes', 'vms-and-kubernetes'],
          },
        ],
      },
      'tls-on-existing-cluster',
      {
        category: 'connect',
        content: [
          'ingress-gateways',
          'terminating-gateways',
          'connect-ca-provider',
          'ambassador',
        ],
      },
      'service-sync',
      'dns',
      {
        category: 'upgrade',
        content: ['compatibility'],
      },
      'uninstall',
      'helm',
    ],
  },
  {
    category: 'dynamic-app-config',
    name: 'Dynamic App Configuration',
    content: ['kv', 'sessions', 'watches'],
  },
  {
    category: 'agent',
    content: [
      'options',
      {
        category: 'config-entries',
        content: [
          'ingress-gateway',
          'proxy-defaults',
          'service-defaults',
          'service-intentions',
          'service-resolver',
          'service-router',
          'service-splitter',
          'terminating-gateway',
        ],
      },
      'telemetry',
    ],
  },
  {
    category: 'security',
    content: [
      {
        category: 'acl',
        content: [
          'acl-system',
          'acl-rules',
          'acl-legacy',
          'acl-migrate-tokens',
          { category: 'auth-methods', content: ['kubernetes', 'jwt', 'oidc'] },
        ],
      },
      'encryption',
    ],
  },
  {
    category: 'enterprise',
    content: [
      'audit-logging',
      'backups',
      'upgrades',
      'read-scale',
      {
        title: 'Single sign-on - OIDC',
        href: '/docs/security/acl/auth-methods/oidc',
      },
      'redundancy',
      'federation',
      'namespaces',
      'network-segments',
      'sentinel',
    ],
  },
  {
    category: 'architecture',
    content: ['anti-entropy', 'consensus', 'gossip', 'jepsen', 'coordinates'],
  },
  {
    category: 'integrate',
    name: 'Integrations',
    content: [
      'partnerships',
      {
        title: 'Vault Integration',
        href: '/docs/connect/ca/vault',
      },
      {
        title: 'Ambassador Integration',
        href: '/docs/k8s/connect/ambassador',
      },
      {
        title: 'Proxy Integration',
        href: '/docs/connect/proxies/integrate',
      },
    ],
  },
  'download-tools',
  {
    category: 'upgrading',
    content: [
      'compatibility',
      'upgrade-specific',
      {
        category: 'instructions',
        content: [
          'general-process',
          'upgrade-to-1-2-x',
          'upgrade-to-1-6-x',
          'upgrade-to-1-8-x',
        ],
      },
    ],
  },
  {
    category: 'troubleshoot',
    name: 'Troubleshoot',
    content: ['common-errors', 'faq'],
  },
]
