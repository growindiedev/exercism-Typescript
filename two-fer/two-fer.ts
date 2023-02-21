/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(name?: string): string {
  // ^                 ^   ^ this is called a return type; it's the type of the
  // ^                 ^     value that is returned from this function
  // ^                 ^
  // ^                 parameters go here
  if(!name){
    return "One for you, one for me.";
  } 
  return `One for ${name}, one for me.`
}
