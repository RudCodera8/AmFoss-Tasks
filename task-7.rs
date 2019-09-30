extern crate regex;
use regex::Regex;
use std::io;

fn main() {

    let mut s=String::new();
    print!("Please enter the email id: ");
    let mut user:String = io::stdin().read_line(&mut s).unwrap().to_string();
    let re = Regex::new(r"^[A-Za-z0-9!#$%&'*+=?^_`{|}~.]+@[a-zA-z0-9]+\.[a-z]*").unwrap();
    let check = re.is_match(&mut s);

    if check{
        println!("valid")
    }
    else{

        println!("invalid")
    }
}
