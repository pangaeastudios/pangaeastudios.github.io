import 'package:flutter/material.dart';

import '../helpers/constants.dart';

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
        appBar: PreferredSize(
          preferredSize: Size.fromHeight(AppBarHeight),
          child: AppBar(
            flexibleSpace: appBarWidget,
          ),
        ),
        drawer: NavDrawer(),
        body: this.body,
      ),
    );
  }
}
