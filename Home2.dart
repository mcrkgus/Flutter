import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
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
        children: [
          TextField(
            decoration: InputDecoration(
              hintText: '검색어를 입력하세요',
              prefixIcon: Icon(Icons.search),
            ),
          ),
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
