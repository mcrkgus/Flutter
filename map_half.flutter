
import 'package:flutter/material.dart';
import 'package:google_maps_flutter/google_maps_flutter.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  const MyApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: "GoogleMap",
      home: GoogleMapPage(),
    );
  }
}

class GoogleMapPage extends StatelessWidget {
  const GoogleMapPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
   // final screenHeight = MediaQuery.of(context).size.height;
    //final halfScreenHeight = screenHeight / 2.0;

    return Scaffold(
      appBar: AppBar(
        title: Text("Google Map"),
      ),
      body:

      Container(
        height: 300,
        child: GoogleMap(
          mapType: MapType.normal, // 지도 유형
          initialCameraPosition: CameraPosition(
            target: LatLng(37.43296265331129, -122.08832357078792),
            zoom: 15.0, // 지도 초기 줌 레벨
          ),
          onMapCreated: (GoogleMapController controller) {
            // 지도 컨트롤러
          },
        ),
      ),
    );
  }
}
