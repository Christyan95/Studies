## Curso -> REACT: Escrevendo com TypeScript

## Nome do Projeto
    Alura Studies

## Sobre o Projeto
    Aplicação onde poderemos adicionar varias tarefas que queremos estudar e
    colocaremos também o tempo que queremos. Adicionadas as tarefas, iremos a
    uma lista onde conseguimos selecionar qual tarefa que queremos. Selecionado
    o estudo do dia, o tempo que foi cadastrao na tarefa irá direto a um
    cronômetro. A partir disso podemos começar a tarefa e o cronômetro irá
    contar ate o tempo desejado e quando o tempo chegar a zero, a tarefa será
    completada e não conseguiremos clicar mais nela.

## Conhecimentos
    . Como criar um projeto react com com create react app
        . O que o create react app traz de estrutura de pasta
    
    . Componentização
        . Formulário
        . Botão
        . Lista
        . Item
        . Cronômetro
        . Relógio

    . Sass
        . Fazer o css mais rápido

    . CSS Modules
        . Não ter problemas de sobreposição de css de um componente para outro

    . Comunicação entre componentes com props

    . Comunicação entre estado interno de um componente com state

## Conceitos
    . DRY (Dont'n repeat yourself) - Não se repita
        . Com criação de componentes nós não precisamos repetir o código

    . SRP (Single responsability principal) - Princípio da responsabilidade única
        . Cada função deve ter uma responsabilidade

## Preparando o ambiente
    . Instalar Node
    . Instalar Visual Studio Code
    . Instalar sass -> npm install --save-dev sass
    . Instalar CSS Modules -> npm install -D typescript-plugin-css-modules
        . Colocar no arquivo tsconfig.json em compilerOptions o seguinte
            "plugins": [{ "name": "typescript-plugin-css-modules" }]
    . Instalar pacote UUID -> npm i uuid 

## Criar projeto react
    . npx create-react-app alura-studies --template typescript --use-npm

## Rodar projeto
    . npm start