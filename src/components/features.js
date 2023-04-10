import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    Button,
    ThemeIcon,
    Grid,
    Col,
    rem,
  } from '@mantine/core';
  import { IconVocabulary, IconAB2, IconCertificate, IconFileDescription } from '@tabler/icons-react';
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
      paddingLeft: 200,
    },

    feat: {
        paddingRight: 150,
      },

      pad: {
        paddingLeft: 200,
      },
  }));
  
  const features = [
    {
      icon: IconVocabulary,
      title: 'Theme Specific Word Banks',
      description: 'All packages are published under MIT license, you can use Mantine in any project',
    },
    {
      icon: IconFileDescription,
      title: 'Latest Past Papers',
      description: 'Build type safe applications, all components and hooks export types',
    },
    {
      icon: IconCertificate,
      title: 'Exam Guides',
      description:
        'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
    },
    {
      icon: IconAB2,
      title: 'Test Yourself',
      description:
        'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
    },
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
  
    const items = features.map((feature) => (
      <div className={classes.feat} key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
          gradient={{ deg: 133, from: '#F73761', to: '#FD5E81' }}
        >
          <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text fz="lg" mt="sm" fw={500}>
          {feature.title}
        </Text>
        <Text c="dimmed" fz="sm">
          {feature.description}
        </Text>
      </div>
    ));
  
    return (
      <div className={classes.wrapper}>
        <Grid gutter={80}>
          <Col span={12} md={5}>
            <Title className={classes.title} order={2}>
              Features
            </Title>
            <Text className={classes.pad} c="dimmed">
            IB LanguageLab is equipped with all the features you need to score a 7 
            on your IB Language Acquisition examinations.
          </Text>
  
            {/* <Button
              variant="gradient"
              gradient={{ deg: 133, from: '#F73761', to: '#F73761' }}
              size="lg"
              radius="md"
              mt="xl"
            >
              Get started
            </Button> */}
          </Col>
          <Col span={12} md={7}>
            <SimpleGrid cols={2} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
              {items}
            </SimpleGrid>
          </Col>
        </Grid>
      </div>
    );
  }