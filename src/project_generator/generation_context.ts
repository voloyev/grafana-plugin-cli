import { TemplateOptions } from '../template_options';


export class GenerationContext {
  public options: TemplateOptions;
  public workingDirectory: string;

  constructor(options: TemplateOptions) {
    this.options = options;
  }
}