package main 

import (
	"github.com/dghubble/go-twitter/twitter"
	"github.com/dghubble/oauth1"
	"os"
	"flag"
	"fmt"

)

func main() {
	var username string 	
	fmt.Println("Enter The UserName.")
	fmt.Scanln(&username)
	tn:= flag.String("twitter",username,"name of the twitter handle")
	
	flag.Parse()
	

	config := oauth1.NewConfig("FJlEboOOHuPWnP0hiJMcyP5Ue", "AV2c7GZjz5pwNN7XNn0KpcFMJpqZpAqClJbT2BMXJ20xRD6qB1")
	token := oauth1.NewToken("1177853975921430528-cTDbQAyGeo8nXhegDUK49jcU7nqHHs", "YzN6sre3uWjxuI0mzdkF0mbgJUL7QUK63TgrkbgypP5vo")
	httpClient := config.Client(oauth1.NoContext, token)

	client := twitter.NewClient(httpClient)

	f, err := os.Create("list.txt")

//Followers
	para := &twitter.FollowerListParams{ScreenName: *tn, Count:30,}
	followers, resp, err := client.Followers.List(para)
	var count int = 0;
	fmt.Println(resp, err)
	f.WriteString("Followers - " + *tn)
	for _, follower := range followers.Users {
		count++
		f.WriteString("\n" + follower.ScreenName)
	}
	f.WriteString("\n")
	f.WriteString(fmt.Sprintf("\n", count))
	f.Close()
}
