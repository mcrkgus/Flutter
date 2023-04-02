import 'package:flutter/material.dart';
class Post {
  final String title;
  final String content;
  final String author;
  final DateTime created;

  const Post({
    required this.title,
    required this.content,
    required this.author,
    required this.created,
  });
}
void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  final List<Post> posts = [
    Post(
      title: '첫 번째 게시글',
      content: '첫 번째 게시글입니다.',
      author: '홍길동',
      created: DateTime.now(),
    ),
    Post(
      title: '두 번째 게시글',
      content: '두 번째 게시글입니다.',
      author: '이순신',
      created: DateTime.now(),
    ),
    Post(
      title: '세 번째 게시글',
      content: '세 번째 게시글입니다.',
      author: '김유신',
      created: DateTime.now(),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: '사람끼리',
      theme: ThemeData(
        primarySwatch: Colors.pink,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: '사람끼리'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key? key, required this.title}) : super(key: key);
  final String title;

  final List<Post> posts = [
    Post(
      title: '첫 번째 게시글',
      content: '첫 번째 게시글입니다.',
      author: '홍길동',
      created: DateTime.now(),
    ),
    Post(
      title: '두 번째 게시글',
      content: '두 번째 게시글입니다.',
      author: '이순신',
      created: DateTime.now(),
    ),
    Post(
      title: '세 번째 게시글',
      content: '세 번째 게시글입니다.',
      author: '김유신',
      created: DateTime.now(),
    ),
  ];

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _selectedIndex = 0;

  final List<Widget> _widgetOptions = <Widget>[
    Text('Home Page'),
    Text('Write Page'),
    Text('Notification Page'),
    Text('My Page'),
  ];

  void _onItemTapped(int index) {
    setState(() {
      _selectedIndex = index;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),

      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: <Widget>[
          Padding(
            padding: const EdgeInsets.all(8.0),
            child :TextField(
              decoration: InputDecoration(
                hintText: '검색어를 입력하세요',
                prefixIcon: Icon(Icons.search),
              ),
            ),
          ),
          Expanded(
            child: ListView.builder(
                scrollDirection: Axis.vertical,
                itemCount: widget.posts.length,
                itemBuilder: (BuildContext context, int index) {
                  final post = widget.posts[index];
                  return ListTile(
                    title : Text(post.title),
                    subtitle: Text('작성자: ${post.author} / 작성일: ${post.created.toString()}'),
                  );
                }),
          )
          //_widgetOptions.elementAt(_selectedIndex),
        ],
      ),

      bottomNavigationBar: BottomNavigationBar(
        backgroundColor: Colors.pink,
        items: const <BottomNavigationBarItem>[
          BottomNavigationBarItem(
            icon: Icon(Icons.home),
            label: '홈화면',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.create),
            label: '글쓰기',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.notifications),
            label: '알림',
          ),
          BottomNavigationBarItem(
            icon: Icon(Icons.person),
            label: '내정보',
          ),
        ],
        currentIndex: _selectedIndex,
        selectedItemColor: Colors.pink,
        selectedIconTheme: IconThemeData(color: Colors.pink),
        unselectedIconTheme: IconThemeData(color: Colors.grey), // 선택되지 않은 아이콘 스타일
        selectedLabelStyle:
        TextStyle(fontSize: 15, fontWeight: FontWeight.bold), // 선택된 라벨 스타일
        unselectedLabelStyle: TextStyle(
            fontSize: 15, fontWeight: FontWeight.bold), // 선택되지 않은 라벨 스타일
        onTap: _onItemTapped,
      ),
    );
  }
}
