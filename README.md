# Monorepo
* O que é
    - É uma estratégia que consiste em um único repositório contendo vários projetos distintos com relacionamentos bem definidos entre eles.

* Principais diferenças
    - Polyrepo é a forma padrão atual de desenvolver aplicativos: um repositório para cada equipe, aplicativo ou projeto. 
E é comum que cada repositório tenha um único artefato de compilação e um pipeline de compilação simples.

* Por que sair de Polyrepo para Monorepo?
    - Mesma versão de pacotes sem se preocupar com incompatibilidade
    - Mais fácil de testar e manter
    - Sem duplicação de código


# Design System
* O que é
    - Design System é uma coleção de componentes reutilizáveis, padronizados para determinado produto, site ou sistema web.

* Diferença entre Style Guide
    - Diferente de um style guide (guia de estilos), um design system vai além: o design system unifica a linguagem de um determinado produto

* Porque o conteúdo do figma deste projeto ainda não é um Design System?
    - Falta definir a linguagem do produto como brand, mensagem etc. Ainda não tenho componentes e classes descritas e que seguem a mesma linguagem definida.

# Estrutura do projeto
* Scss
    - Mixins
    - Tema
    - Fontes
    - Espaços
    - Media queries
* React
    - Componentes
    - Storybook
    - Testes Jest
    - Lerna e Husty
        * Lerna
            - Lerna gerencia pacotes e scripts monorepo podendo controlar todos pacotes, publicar versões npm e etc.
            Executar scripts entre os projetos, como executar um Jest dentro do pacote React direto do root antes de cada commit.
        * Husky	
            - Husky possui hooks que permitem executar ações antes dos commits.
            Usando isso com Lerna podemos executar testes, stylelint fix e outras ações antes de cada commit.

* Foundation
    - Core do projeto que pode ser utilizado para manter o padrão de design, contendo valores do style-guide em formado de contantes em typescript para serem reutilizados no nível de código, além de entidades model que são interpretadas nos componentes do projeto React.

* Myportfolio
    -   Este é o projeto pai, onde os templates estão criados a partir dos componentes do projeto React.
Neste projeto estão os dados reais com comunicação via API Contentful.

* Internacionalização
    - Foi utilizado a função Locations do Contentful que permite conteúdos para mais de uma linguagem
e também o pacote i18n.

* Integração Contínua
    - O projeto está hospedado no netlify com integração contínua por commit no branch Main.

## Stack
* Reactjs
* Nextjs
* Storybook
* Design System
* Monorepo
* Figma
* Contentful

## Live version
http://hudsonpotenciano-portfolio.netlify.app/

## Storybook 
https://portfoliods-storybook.netlify.app/

## Figma Design System
https://www.figma.com/file/V691tSK3mA0SahqhcUQrFE/Portfolio?node-id=0%3A1&t=QNcVaR6hBBjfL7AJ-1

