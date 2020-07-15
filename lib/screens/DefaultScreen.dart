import 'package:flutter/material.dart';

import '../widgets/NavDrawer.dart';

class DefaultStatelessScreen extends StatelessWidget {
  final Widget appBarWidget;
  final Widget body;

  const DefaultStatelessScreen({
    Key key,
    @required this.appBarWidget,
    @required this.body
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
        appBar: AppBar(
          title: appBarWidget,
        ),
        drawer: NavDrawer(),
        body: this.body,
      ),
    );
  }
}
