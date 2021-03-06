export class PathConverter {
  static to_query(path_: string): string {
    return path_.replaceAll("/", "%2F");
  }

  static split_url(file: string): string[] {
    let split_arr = file.split("/");
    return split_arr;
  }

  static get_base_name(file: string): string {
    let base_file = PathConverter.split_url(file).pop();
    return base_file ?? "";
  }

  static get_parent_file(file: string): string {
    let split_arr = PathConverter.split_url(file);
    console.log("split arr is:", split_arr);
    split_arr.pop();
    let parent_file = split_arr.join("-");
    return split_arr.pop() ?? "";
  }
}
