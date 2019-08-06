import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: any, character: string) {
    return value.replace(character, ' ');
  }

}
