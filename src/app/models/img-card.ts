export class ImageCard {
    id: number;
    nome: string;
    description: string;
    iconUrl: string;
    github: string;
  
    constructor({ id, nome, description, iconUrl, github }: ImageCard) {
      this.id = id;
      this.nome = nome;
      this.description = description;
      this.iconUrl = iconUrl;
      this.github = github;
    }
  }
  